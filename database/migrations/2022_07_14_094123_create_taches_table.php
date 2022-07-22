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
        Schema::create('taches', function (Blueprint $table) {
            $table->id();
            $table->string("tache");
            $table->DateTime("date_debut");
            $table->DateTime("date_fin");

            $table->bigInteger('cat_tache_id')->unsigned()->nullable();
            $table->foreign('cat_tache_id')->references('id')->on('cat_taches');

            $table->bigInteger('statut_id')->unsigned()->nullable();
            $table->foreign('statut_id')->references('id')->on('statuts');

            $table->bigInteger('projet_id')->unsigned()->nullable();
            $table->foreign('projet_id')->references('id')->on('statuts');


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
        Schema::dropIfExists('taches');
    }
};
