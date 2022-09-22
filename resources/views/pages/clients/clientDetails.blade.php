@extends('layouts.master')
@section('client', 'active')
@section('content')
<div class="body d-flex py-lg-3 py-md-2">
    <div class="container-xxl">
        <div class="row clearfix">
            <div class="col-md-12">
                <div class="card border-0 mb-4 no-bg">
                    <div class="card-header py-3 px-0 d-flex align-items-center  justify-content-between border-bottom">
                        <h3 class=" fw-bold flex-fill mb-0"> Client Profile </h3>
                    </div>
                </div>
            </div>
        </div><!-- Row End -->
        <div class="row g-3">
            {{-- <div class="col-xl-8 col-lg-12 col-md-12">
                <div class="card teacher-card  mb-3">
                    <div class="card-body d-flex teacher-fulldeatil">
                        <div class="card-body  d-flex">


                                <div class="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                                    <img src="{{ asset('assets/images/lg/avatar5.jpg') }}" alt=""
                                        class="avatar xl rounded-circle img-thumbnail shadow-sm">
                                    <div
                                        class="about-info d-flex align-items-center mt-1 justify-content-center flex-column">

                                        <div class="btn-group mt-2" role="group" aria-label="Basic outlined example">
                                            <button type="button" class="btn btn-outline-secondary editbtn"
                                                value="{{ $clients->id }}" data-bs-toggle="modal"
                                                data-bs-target="#editproject"><i
                                                    class="icofont-edit text-success"></i></button>
                                            <button type="button" attr_id="{{ $clients->id }}" class="Bdelete_btn"
                                                style="border: none" class="sup_role"
                                                class="btn btn-outline-secondary deleterow"><i
                                                    class="icofont-ui-delete text-danger"></i></button>
                                        </div>
                                    </div>
                                </div>


                            <div class="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
                                <h1 class="mb-0 fw-bold d-block fs-3 mt-2 fulln">{{ $clients->full_name }}</h1>
                                <h6 class="mb-0 fw-bold d-block fs-9 mt-2 em">{{ $clients->email }}</h6>
                                <input type="hidden" class="pa" value="{{ $clients->pays }}">
                                <input type="hidden" class="vil" value="{{ $clients->ville }}">
                                <input type="hidden" class="te" value="{{ $clients->telephone }}">
                                <input type="hidden" class="ty" value="{{ $clients->type_client }}">


                            </div>

                        </div>
                    </div>
                </div>
            </div> --}}


        </div>
        <div class="row g-3">
            <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="row g-3">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header py-3 d-flex justify-content-between align-items-center">
                                <div class="info-header">
                                    <h6 class="mb-0 fw-bold ">Client Invoice</h6>
                                </div>
                            </div>
                            <div class="card-body">
                                <table id="patient-table" class="table table-hover align-middle mb-0" style="width: 100%;">
                                    <thead>
                                        <tr>

                                            <th>projet</th>
                                            <th>Date projet</th>
                                            <th>Opportunite</th>

                                            <th>Statut</th>

                                        </tr>
                                    </thead>

                                    <tbody>
                                        @forelse ($projets as $projet)
                                            <tr role="row  Rowdelete2{{ $projet->id }}" class="odd">
                                                <td class="">{{ $projet->projet }}</td>
                                                <input type="hidden" class="proj" value="{{ $projet->projet }}">

                                                <td>{{ date('M d,Y', strtotime($projet->date_projet)) }}</td>
                                                <input type="hidden" class="datp" value="{{ $projet->date_projet }}">

                                                <td class="">{{ $projet->opportunite }}</td>
                                                <input type="hidden" class="opportu" value="{{ $projet->opportunite_id }}">



                                                <input type="hidden" class="descp" value="{{ $projet->description }}">
                                                @if ($projet->statut == 'COMPLETE')
                                                    <td class=""><span
                                                            class="badge bg-success">{{ $projet->statut }}</span></td>
                                                    <input type="hidden" class="statu" value="{{ $projet->statu_id }}">
                                                @elseif ($projet->statut == 'En attente')
                                                    <td class=""><span
                                                            class="badge bg-secondary">{{$projet->statut }}</span></td>
                                                    <input type="hidden" class="statu" value="{{ $projet->statu_id }}">
                                                @elseif ($projet->statut == 'Arrêtée')
                                                    <td class=""><span
                                                            class="badge bg-danger">{{ $projet->statut }}</span></td>
                                                    <input type="hidden" class="statu" value="{{ $projet->statu_id }}">
                                                @elseif ($projet->statut == 'En cours')
                                                    <td class=""><span
                                                            class="badge rounded-pill bg-secondary">{{ $projet->statut }}</span>
                                                    </td>
                                                    <input type="hidden" class="statu" value="{{ $projet->statu_id }}">
                                                @elseif ($projet->statut == 'Planifiée')
                                                    <td class=""><span class="badge bg-info">{{ $projet->statut }}</span>
                                                    </td>
                                                    <input type="hidden" class="statu" value="{{ $projet->statu_id }}">
                                                @elseif ($projet->statut == 'Non planifiée')
                                                    <td class=""><span class="badge bg-dark">{{ $projet->statut }}</span>
                                                    </td>
                                                    <input type="hidden" class="statu" value="{{ $projet->statu_id }}">
                                                @else
                                                    <td class="">{{ $projet->statut }}</td>
                                                    <input type="hidden" class="statu" value="{{ $projet->statu_id }}">
                                                @endif

                                            </tr>

                                        @empty
                                        @endforelse
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div><!-- Row End -->
            </div>


        </div>


        <!-- Row End -->
    </div>
</div>
@endsection
@section('scripts')
<script>
$(document).ready(function() {
    $('#patient-table')
        .addClass('nowrap')
        .dataTable({
            responsive: true,
            columnDefs: [{
                targets: [-1, -3],
                className: 'dt-body-right'
            }]
        });
});
</script>
@endsection
