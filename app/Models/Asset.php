<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asset extends Model
{
    /** @use HasFactory<\Database\Factories\AssetFactory> */
    use HasFactory;

    protected $fillable = [
        'patrimony_number',
        'name',
        'category',
        'brand',
        'model',
        'condition',
        'value',
        'usage_time',
        'invoice_number',
        'description',
        'sector_id',
        'user_id',
    ];

    public function sector()
    {
        return $this->belongsTo(Sector::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
