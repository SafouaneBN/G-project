<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class projet extends Model
{
    use HasFactory;
    public $guarded = [];
    public $table = "projets";


    public function opportunite_projet(){
        return $this->belongsTo(opportunite::class,);
    }

    public function typeprojet_projet(){
        return $this->belongsTo(type_project::class,);
    }

    public function activite_projet(){
        return $this->hasMany(activite::class,);
    }


}
