<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cat_tache extends Model
{
    use HasFactory;
    public $guarded = [];
    public $table = "cat_taches";

    public function tach_catTach(){
        return $this->hasMany(tache::class,"cat_tache_id","id");
    }
}
