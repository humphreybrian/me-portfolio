<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory; //do research on this one.
    protected $fillable = ['name', 'email','phone','message']; 
    //the fields to be used are //$table->string('name');
    // $table->string('email');
    // $table->string('phone');
    // $table->string('message');
    //remeber to handle phone validation.
}
