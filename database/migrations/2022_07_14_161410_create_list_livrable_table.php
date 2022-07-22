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
        Schema::create('list_livrables', function (Blueprint $table) {
            $table->id();

            $table->string("designation_livrables");

            $table->bigInteger('activites_id')->unsigned()->nullable();
            $table->foreign('activites_id')->references('id')->on('activites');

            $table->bigInteger('livrables_id')->unsigned()->nullable();
            $table->foreign('livrables_id')->references('id')->on('livrables');

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
        Schema::dropIfExists('activites_livrables');
    }
};
