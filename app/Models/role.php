<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class role extends Model
{
    use HasFactory;
    public $guarded = [];
    public $table = "roles";

    public function role_user(){
        return $this->belongsToMany(User::class,role_user::class,"role_id","user_id");
    }
}
