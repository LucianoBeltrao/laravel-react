<?php

namespace App\Http\Controllers;

use App\Models\Asset;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AssetController extends Controller
{
     public function index(): Response
    {
        $assets = Asset::orderByDesc('id')->get();

        return Inertia::render('Assets/AssetIndex', ['assets' => $assets]);
    }

    public function show(Asset $asset): Response
    {
        return Inertia::render('Assets/AssetShow', ['asset' => $asset]);
    }
}
