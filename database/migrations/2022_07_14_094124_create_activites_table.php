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
        Schema::create('activites', function (Blueprint $table) {
            $table->id();
            $table->string("libelle");
            $table->DateTime("planification_date_debut");
            $table->DateTime("planification_date_fin");
            $table->string("duree_prevue");
            $table->DateTime("execution_date_debut");
            $table->DateTime("execution_date_fin");
            $table->string("priorite");
            $table->Text("description");


            $table->bigInteger('projet_id')->unsigned()->nullable();
            $table->foreign('projet_id')->references('id')->on('projets');

            $table->bigInteger('tache_id')->unsigned()->nullable();
            $table->foreign('tache_id')->references('id')->on('taches');

            $table->bigInteger('statu_id')->unsigned()->nullable();
            $table->foreign('statu_id')->references('id')->on('statuts');

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
        Schema::dropIfExists('activites');
    }
};
