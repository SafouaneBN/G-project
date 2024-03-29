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
        Schema::create('livrables', function (Blueprint $table) {
            $table->id();
            $table->string("livrable");
            $table->string("fichier");

            $table->bigInteger('cat_livrable_id')->unsigned()->nullable();
            $table->foreign('cat_livrable_id')->references('id')->on('cat_livrables');

            $table->bigInteger('activites_id')->unsigned()->nullable();
            $table->foreign('activites_id')->references('id')->on('activites');

            $table->bigInteger('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users');


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
        Schema::dropIfExists('livrables');
    }
};
