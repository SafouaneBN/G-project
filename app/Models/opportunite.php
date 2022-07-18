<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class opportunite extends Model
{
    use HasFactory;
    public $guarded = [];
    public $table = "opportunites";

    public function client_opportunite(){
        return $this->hasMany(client::class,);
    }

    public function user_opportunite(){
        return $this->hasMany(User::class,);
    }

    public function projet_opportunite(){
        return $this->hasMany(projet::class,);
    }


}
