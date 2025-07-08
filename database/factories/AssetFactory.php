<?php

namespace Database\Factories;

use App\Models\Sector;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Asset>
 */
class AssetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'patrimony_number' => $this->faker->unique()->numerify('PAT-#####'),
            'name' => $this->faker->unique()->randomElement(['Computador', 'Celular', 'Carro', 'Caminhão', 'Mesa', 
            'Empilhadeira', 'Galpão', 'Notebook', 'Monitor', 'Impressora', 'Scanner', 'Roteador', 'Switch', 'Servidor'
            , 'Ar Condicionado', 'Geladeira', 'Micro-ondas', 'Televisão']),
            'category' => $this->faker->randomElement(['Informática', 'Mobiliário', 'Eletrônicos']),
            'brand' => $this->faker->company,
            'model' => $this->faker->word,
            'condition' => $this->faker->randomElement(['novo', 'usado']),
            'value' => $this->faker->randomFloat(2, 100, 10000),
            'usage_time' => $this->faker->numberBetween(1, 10) . ' horas',
            'invoice_number' => $this->faker->numerify('NF-#####'),
            'description' => $this->faker->text(200),
            'sector_id' => 1,
            'user_id' => 1,
        ];
    }
}
