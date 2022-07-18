<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class livrable extends Model
{
    use HasFactory;
    public $guarded = [];
    public $table = "livrables";

    public function livrable_catlivrable(){
        return $this->belongsTo(cat_livrable::class);
    }

    public function activite_livrable(){
        return $this->hasMany(activite::class,);
    }


    public function list_livrables(){
        return $this->belongsToMany(activite::class,list_livrable::class,"livrables_id","activites_id");
    }
}
