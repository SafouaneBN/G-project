@extends('layouts.master')
@section('team_leader', 'active')
@section('content')
    <!-- Body: Body -->
    <div class="body d-flex py-lg-3 py-md-2">
        <div class="container-xxl">
            <div class="row align-items-center">
                <div class="border-0 mb-4">
                    <div
                        class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom">
                        <h3 class="fw-bold mb-0">Activite</h3>
                        <div class="col-auto d-flex">
                            <button type="button" class="btn btn-dark " data-bs-toggle="modal" data-bs-target="#addevent"><i
                                    class="icofont-plus-circle me-2 fs-6"></i>Ajouter Activite</button>
                        </div>
                    </div>
                </div>
            </div> <!-- Row end  -->
            <div class="row clearfix g-3">
                <div class="col-lg-12 col-md-12 ">
                    <!-- card: Calendar -->
                    <div class="card">
                        <div class="card-body" id='my_calendar'></div>


                    </div>
                </div>
            </div><!-- Row End -->
        </div>
    </div>


    <!-- Add Event-->
    <div class="modal fade" id="addevent" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="eventaddLabel">Ajouter Activite</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form method="post" action="{{ route('parametre.addActivite') }}">
                    @csrf
                    <div class="modal-body">

                        <div class="mb-3">
                            <label for="exampleFormControlInput99" class="form-label">Activite</label>
                            <input type="text" name="libelle" class="form-control" id="exampleFormControlInput99" required>
                        </div>

                        <div class=" row g-3 mb-3">
                      
                        </div>

                        <div class="deadline-form">
                            <div class="row g-3 mb-3">
                                <div class="col">
                                    <label for="datepickerded" class="form-label">Date debut</label>
                                    <input type="date" name="date_d" class="form-control date_debut" id="date_debut" required>
                                </div>
                                <div class="col">
                                    <label for="datepickerdedone" class="form-label">Date fin</label>
                                    <input name="date_f" type="date" id="date_fin" class="form-control date_fin" required>
                                </div>

                            </div>
                            <div class="row g-3 mb-3">
                                <div class="col">
                                    <label for="datepickerded" class="form-label">Date execution debut</label>
                                    <input name="date_e_d" type="date" class="form-control" id="date_debut_ex" required>
                                </div>
                                <div class="col">
                                    <label for="datepickerdedone" class="form-label">Date execution fin</label>
                                    <input name="date_e_f" type="date" class="form-control" id="date_fin_ex" required>
                                </div>
                            </div>
                            <div class="row g-3 mb-3">
                                <div class="col">

                                    <div class="col">
                                        <label for="datepickerdedone" class="form-label">Realisateur</label>
                                        <select class="form-select" name="user_accesses"
                                            aria-label="Default select Priority">
                                            @forelse ($users as $user)
                                                <option value="{{ $user->id }}">{{ $user->name }}</option>
                                            @empty
                                                <option selected="">ajouter user</option>
                                            @endforelse
                                        </select>
                                    </div>
                                </div>
                                <div class="col">
                                    <label for="exampleFormControlInput99" class="form-label">Priorite</label>
                                    <input type="text" name="priorite" class="form-control"
                                        id="exampleFormControlInput99" required>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea78" class="form-label"> Description </label>
                            <textarea class="form-control" name="description" id="exampleFormControlTextarea78" rows="3"
                                placeholder="Add any extra details about the request" ></textarea>
                        </div>
                    </div>
                    <input type="hidden" value="{{ $tache->id }}" name="tache" class="tache">
                    <input type="hidden" value="{{ $tache->projet_id }}" name="projet" class="projet">
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="submit" class="btn btn-dark ms-1 cmt" value="{{ $tache->id }}"><i
                                class="icofont-plus-circle me-2 fs-6"></i>ajouter</button>

                    </div>

                </form>
            </div>
        </div>
    </div>
@endsection



@section('scripts')
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var url = window.location.href;

            var id = url.substring(url.lastIndexOf("/") + 1);
            var calendarEl = document.getElementById('my_calendar');
            var SITEURL = "{{ url('/') }}";

            var calendar = new FullCalendar.Calendar(calendarEl, {
                timeZone: 'UTC',
                initialView: 'dayGridMonth',
                events: '/project/fullcalendar/' + id,
                editable: false,
                selectable: true,
            });

            calendar.render();
        });
    </script>
    <script>
        document.getElementById("date_debut").onchange = function() {
            var input = document.getElementById("date_fin");
            var input2 = document.getElementById("date_debut_ex");
            var input3 = document.getElementById("date_fin_ex");
            input.setAttribute("min", this.value);
            input2.setAttribute("min", this.value);
            input3.setAttribute("min", this.value);
        }
        document.getElementById("date_fin").onchange = function() {
            var input = document.getElementById("date_debut_ex");
            var input2 = document.getElementById("date_fin_ex");
            input.setAttribute("max", this.value);
            input2.setAttribute("max", this.value);
        }

        document.getElementById("date_debut_ex").onchange = function() {
            var input = document.getElementById("date_fin_ex");
            input.setAttribute("min", this.value);
        }

        // $('.date_fin').change(function() {
        //     // If($('#date_debut').val() > $('.date_fin').val()){
        //     // ('.date_fin').addClass('is-invalid');
        //     // }else{}
        //     // ('.date_fin').removeClass('is-invalid');


        //     var $tet = $('.date_debut').val() > $('.date_fin').val();
        //     if ($tet) {
        //         // alert("changer la date que vous avez choisie")
        //         $dateP = $("#date_debut").val();
        //         ('.date_fin').val($dateP.addDays(1));
        //     } else {
        //         $('#date_fin').removeClass('is-invalid');

        //     }
        // });
    </script>
@endsection
