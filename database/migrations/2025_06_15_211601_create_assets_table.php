<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('assets', function (Blueprint $table) {
            $table->id();
            $table->string('patrimony_number')->unique();
            $table->string('name');
            $table->string('category');
            $table->string('brand');
            $table->string('model')->nullable();
            $table->enum('condition', ['novo', 'usado']);
            $table->decimal('value', 15, 2)->nullable();
            $table->string('usage_time')->nullable();
            $table->string('invoice_number')->nullable();
            $table->text('description')->nullable();
            $table->foreignId('sector_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assets');
    }
};
