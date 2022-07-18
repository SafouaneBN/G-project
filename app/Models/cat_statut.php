<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cat_statut extends Model
{
    use HasFactory;
    public $guarded = [];
    public $table = "cat_statuts";

    public function statut_catStatu(){
        return $this->hasMany(statut::class);
    }
}
