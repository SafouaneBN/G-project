<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class activite extends Model
{
    use HasFactory;
    public $guarded = [];
    public $table = "activites";


    public function projet_activites(){
        return $this->belongsTo(projet::class);
    }

    public function tach_activites(){
        return $this->belongsTo(tache::class);
    }

    public function statut_activites(){
        return $this->belongsTo(statut::class,"statu_id","id");
    }

    public function livrable_activites(){
        return $this->hasMany(livrable::class,"activites_id","id");
    }

    public function user_activites(){
        return $this->belongsTo(User::class,"user_id","id");
    }

    public function list_livrables(){
        return $this->belongsToMany(livrable::class,list_livrable::class,"activites_id","livrables_id");
    }


}
