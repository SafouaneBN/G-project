<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class message extends Model
{
    use HasFactory;
    public $table = "messages";
    public $guarded = [];


    public function conversation(){
        return $this->belongsTo(conversation::class,'conversations_id','id');
    }
}
