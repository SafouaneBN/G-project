<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projets', function (Blueprint $table) {
            $table->id();
            $table->string("projet");
            $table->dateTime("date_projet");
            $table->Text("description");

            $table->bigInteger('opportunite_id')->unsigned()->nullable();
            $table->foreign('opportunite_id')->references('id')->on('opportunites');

            $table->bigInteger('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users');

            $table->bigInteger('type_projet_id')->unsigned()->nullable();
            $table->foreign('type_projet_id')->references('id')->on('type_projets');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
};
