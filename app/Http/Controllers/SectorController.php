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
        $sector = Sector::orderByDesc('id')->paginate();


        return Inertia::render('Sector/SectorIndex', ['sector' => $sector]);
    }
}
