<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'luciano.alves@zamed.com.br'],
            ['name' => 'Luciano', 'email' => 'luciano.alves@zamed.com.br',
            'password' => 'password']
        );

        User::firstOrCreate(
            ['email' => 'lucas.alves@zamed.com.br'],
            ['name' => 'Lucas', 'email' => 'lucas.alves@zamed.com.br',
            'password' => 'password']
        );

        User::firstOrCreate(
            ['email' => 'maria.alves@zamed.com.br'],
            ['name' => 'Maria', 'email' => 'maria.alves@zamed.com.br',
            'password' => 'password']
        );

        User::firstOrCreate(
            ['email' => 'lucio.alves@zamed.com.br'],
            ['name' => 'Lucio', 'email' => 'lucio.alves@zamed.com.br',
            'password' => 'password']
        );
    }
}
