<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class list_livrable extends Model
{
    use HasFactory;
    public $guarded = [];
    public $table = "list_livrables";
}
