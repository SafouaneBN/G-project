<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use livrable;

class commentaire extends Model
{
    use HasFactory;
    public $guarded = [];
    public $table = "commentaires";

    public function livrblees(){
        return $this->belongTo(livrable::class,"livrables_id","id");
    }

    public function comment_user(){
        return $this->belongTo('App\Models\User',"user_id","id");
    }
}
