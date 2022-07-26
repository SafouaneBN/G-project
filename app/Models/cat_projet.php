<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cat_projet extends Model
{
    use HasFactory;
    public $guarded = [];
    public $table = "cat_projets";

    public function projet_catProjet(){
        return $this->hasMany(projets::class,"catpro_id","id");
    }
}
