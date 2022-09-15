<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class conversation extends Model
{
    use HasFactory;

    public $guarded = [];
    public $table = "conversations";

    public function messages(){
        return $this->hasMany(message::class,'conversations_id','id');
    }

    public function user_conversation(){
        return $this->belongsToMany(User::class, UserConversation::class, 'conversations_id', 'user_id');
    }

    public function projet_conv(){
        return $this->belongsTo(projet::class,"projet_id","id");
    }

}
