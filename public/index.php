<?php
require_once '../vendor/autoload.php';

$klein = new \Klein\Klein();

require "../vendor/crodas/haanga/lib/Haanga.php";

$config = array(
  'template_dir' => '.',
  'cache_dir' => 'cache',
  'autoload' => TRUE,
  'compiler' => array(),
);
Haanga::configure($config);

$klein->respond('GET', '/[:key]', function ($request) {
  Haanga::Load("index.html", ['key' => $request->key]);
});

$klein->dispatch();