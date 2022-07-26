<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class opportunite extends Model
{
    use HasFactory;
    public $guarded = [];
    public $table = "opportunites";
    protected $primaryKey = "id";

    public function client_opportunite(){
        return $this->belongsTo(client::class,"client_id","id");
    }

    public function user_opportunite(){
        return $this->hasMany(User::class,);
    }

    public function projet_opportunite(){
        return $this->hasMany(projet::class,);
    }


}
