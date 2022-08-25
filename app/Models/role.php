<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class role extends Model
{
    use HasFactory;
    public $guarded = [];
    public $table = "roles";

    public function rol_user(){
        return $this->HasMany(User::class,"role_id","id");
    }
}
