<?php

use App\Http\Controllers\AssetController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SectorController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/show-user/{user}', [UserController::class, 'show'])->name('users.show');
    Route::get('/create-user', [UserController::class, 'create'])->name('users.create');
    Route::post('/store-user', [UserController::class, 'store'])->name('users.store');

    Route::get('/edit-user/{user}', [UserController::class, 'edit'])->name('users.edit');
    Route::put('/update-user/{user}', [UserController::class, 'update'])->name('users.update');
    Route::delete('/destroy-user/{user}', [UserController::class, 'destroy'])->name('users.destroy');

    Route::get('/sectors', [SectorController::class, 'index'])->name('sectors.index');
    Route::get('/show-sector/{sector}', [SectorController::class, 'show'])->name('sectors.show');
    Route::get('/create-sector', [SectorController::class, 'create'])->name('sectors.create');
    Route::get('/store-sector', [SectorController::class, 'store'])->name('sectors.store');

    Route::get('/edit-sector/{sector}', [SectorController::class, 'edit'])->name('sectors.edit');
    Route::put('/update-sector/{sector}', [SectorController::class, 'update'])->name('sectors.update');
    Route::delete('/destroy-sector/{sector}', [SectorController::class, 'destroy'])->name('sectors.destroy');

    Route::get('/assets', [AssetController::class, 'index'])->name('assets.index');
    Route::get('/show-asset/{asset}', [AssetController::class, 'show'])->name('assets.show');
    Route::get('/create-asset', [AssetController::class, 'create'])->name('assets.create');
    Route::get('/store-asset', [AssetController::class, 'store'])->name('assets.store');

    Route::get('/edit-sector/{asset}', [AssetController::class, 'edit'])->name('assets.edit');
    Route::put('/update-sector/{asset}', [AssetController::class, 'update'])->name('assets.update');
    Route::delete('/destroy-sector/{asset}', [AssetController::class, 'destroy'])->name('assets.destroy');



});

require __DIR__.'/auth.php';
