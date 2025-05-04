<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('courses', function () {
        return Inertia::render('courses/index');
    })->name('courses.index');

    Route::get('courses/show/javascript', function () {
        return Inertia::render('courses/show/javascript');
    })->name('js');

    Route::get('courses/show/html', function () {
        return Inertia::render('courses/show/html');
    })->name('html');


    Route::get('exams', function () {
        return Inertia::render('exams/index');
    })->name('exams.index');

    Route::get('certificates', function () {
        return Inertia::render('certificates/index');
    })->name('certificates.index');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
