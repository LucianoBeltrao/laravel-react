<?php

namespace App\Http\Controllers;

use App\Models\Sector;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SectorController extends Controller
{
    public function index(): Response
    {
        $sectors = Sector::orderByDesc('id');



        return Inertia::render('Sectors/SectorIndex', ['sectors' => $sectors]);
    }
}
