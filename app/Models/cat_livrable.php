<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cat_livrable extends Model
{
    use HasFactory;
    public $guarded = [];
    public $table = "cat_livrables";

    public function livrable_catLivrable(){
        return $this->hasMany(livrable::class);
    }
}
