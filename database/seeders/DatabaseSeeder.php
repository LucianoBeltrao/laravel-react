<?php

namespace Database\Seeders;

use App\Models\Asset;
use App\Models\Sector;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {


        Sector::factory(6)->create();

        $this->call([
            UserSeeder::class,
        ]);

        Asset::factory(10)->create();

    }
}
