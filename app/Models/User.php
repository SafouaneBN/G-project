<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function opportunite_user(){
        return $this->belongsTo(opportunite::class,);
    }

    public function projet_user(){
        return $this->hasMany(projet::class,);
    }

    public function activite_user(){
        return $this->hasMany(activite::class,"user_id","id");
    }

    public function user_role(){
        return $this->belongsToMany(role::class,role_user::class,"user_id","role_id");
    }

    public function user_commen(){
        return $this->Hasmany(commentaire::class,"user_id","id");
    }
}
