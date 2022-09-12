<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class notification extends Model
{
    use HasFactory;
    public $guarded = [];
    public $table = "notifications";


    public function user_notification(){
        return $this->belongsTo(User::class,"user_id","id");
    }

    public function user_notifiable(){
        return $this->belongsTo(User::class,"user_accesses","id");
    }
    
}
