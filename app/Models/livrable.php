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
        return $this->belongsTo(cat_livrable::class,"cat_livrable_id","id");
    }

    public function activite_livrable(){
        return $this->belongsTo(activite::class,"activites_id","id");
    }


    public function list_livrables(){
        return $this->belongsToMany(activite::class,list_livrable::class,"livrables_id","activites_id");
    }

    public function livreble_commen(){
        return $this->hasMany(commentaire::class,"livrables_id","id");
    }
}
