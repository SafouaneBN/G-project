<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class client extends Model
{
    use HasFactory;
    public $guarded = [];
    public $table = "clients";

    public function opportunite_client(){
        return $this->belongsTo(opportunite::class,);
    }

    public function projet_client(){
        return $this->hasMany(projet::class,);
    }
}
