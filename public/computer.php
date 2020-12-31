<?php

declare(strict_types=1);

header('Content-Type: application/json');

$fen = $_GET['fen'] ?? 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

$errorFile = '/tmp/chess-error-output.txt';
if (file_exists($errorFile) === false) {
    file_put_contents($errorFile, '');
    chmod($errorFile, 0666);
}
$descriptorspec = [
    0 => ['pipe', 'r'],
    1 => ['pipe', 'w'],
    2 => ['file', $errorFile, 'a']
];
$cwd = './';
$chess = realpath(__DIR__ . '/../bin/chess');
$process = proc_open($chess . ' --uci', $descriptorspec, $pipes, $cwd);
if (is_resource($process)) {
    sleep(1);
    fwrite($pipes[0], 'position fen ' . $fen . PHP_EOL);
    sleep(1);
    fwrite($pipes[0], 'go depth 5' . PHP_EOL);
    sleep(1);
    fwrite($pipes[0], 'quit' . PHP_EOL);
    fclose($pipes[0]);
    $output = stream_get_contents($pipes[1]);
    fclose($pipes[1]);
    proc_close($process);
    if (preg_match('/bestmove\s*((?:[a-h][1-8]){2})/', $output, $matches)) {
        echo json_encode($matches[1]);
    }
} else {
    http_response_code(404);
}
