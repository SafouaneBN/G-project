<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class type_project extends Model
{
    use HasFactory;
    public $guarded = [];
    public $table = "type_projets";

    public function projet_Typeprojet(){
        return $this->hasMany(projet::class,);
    }
}
