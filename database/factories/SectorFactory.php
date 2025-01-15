<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Sector>
 */
class SectorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->unique()->randomElement(['Almoxarifado', 'Farmácia', 'Galpão', 'Farmácia Satélite', 'UPA 1', 'UPA 2']),
            'logradouro' => $this->faker->unique()->randomElement(['Rua A', 'Rua B', 'Rua C', 'Rua D', 'Rua E', 'Rua F']),
            'numero' => $this->faker->numberBetween(int1: 50_00, int2: 45000_00),
            'bairro' => $this->faker->unique()->randomElement(['Marina', 'Moca', 'Santa Tereza', 'Jardins', 'Brooklin', 'Pinheiros']),
            'cidade' => $this->faker->randomElement(['Rio de Janeiro', 'São Paulo']),
            'estado' => $this->faker->randomElement(['Rio de Janeiro', 'São Paulo']),
            'responsavel' => fake()->name(),
        ];
    }
}
