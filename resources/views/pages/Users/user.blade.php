@extends('layouts.master')
@section('user', 'active')
@section('content')
    <!-- Body: Body -->
    <div class="body d-flex py-lg-3 py-md-2">
        <div class="container-xxl">
            <div class="row clearfix">
                <div class="col-md-12">
                    <div class="card border-0 mb-4 no-bg">
                        <div
                            class="card-header py-3 px-0 d-sm-flex align-items-center  justify-content-between border-bottom">
                            <h3 class=" fw-bold flex-fill mb-0 mt-sm-0">Employee</h3>
                            <button type="button" class="btn btn-dark me-1 mt-1 w-sm-100" data-bs-toggle="modal"
                                data-bs-target="#createemp"><i class="icofont-plus-circle me-2 fs-6"></i>Add
                                Employee</button>

                        </div>
                    </div>
                </div>
            </div><!-- Row End -->
            <div
                class="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 row-deck py-1 pb-4">
                @forelse ($users as $user)
                    <div class="col">

                        <div class="card teacher-card">

                            <div class="card-body d-flex">

                                <div class="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                                    <img src="{{ asset('assets/images/lg/avatar4.jpg') }}" alt=""
                                        class="avatar xl rounded-circle img-thumbnail shadow-sm">

                                </div>
                                <div class="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
                                    <h6 class="mb-0 mt-2  fw-bold d-block fs-6">{{ $user->name }}</h6>
                                    <h5 class="mb-0 mt-2  fw-bold d-block fs-6">{{ $user->email }}</h5>
                                    <span class="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">{{ $user->user_role->libelle }}</span>


                                </div>
                            </div>

                        </div>
                    </div>
                    @empty

                    <h6>No Record</h6>

                @endforelse



            </div>
        </div>
    </div>


    <!-- Create Employee-->
    <div class="modal fade" id="createemp" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="createprojectlLabel"> Add Employee</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form method="post" action="{{ route('para.addUser') }}">
                    @csrf
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="exampleFormControlInput877" class="form-label">Nom Employee</label>
                            <input type="text" class="form-control" id="name" name="name"
                                placeholder="Explain what the Project Name">
                        </div>


                        <div class="deadline-form">


                            <div class="row g-3 mb-3">
                                <div class="col">
                                    <label for="exampleFormControlInput177" class="form-label">Email</label>
                                    <input type="text" class="form-control" id="email" name="email"
                                        placeholder="User Name">
                                </div>
                                <div class="col">
                                    <label for="exampleFormControlInput277" class="form-label">Mot de passe</label>
                                    <input type="Password" class="form-control" id="password" name="password"
                                        placeholder="Password">
                                </div>
                            </div>

                            <div class="row g-3 mb-3">
                                <div class="col">
                                    <label class="form-label">Role</label>
                                    <select class="form-select" id="role" name="role"
                                        aria-label="Default select Project Category">
                                        @forelse ($roles as $role)
                                            <option value="{{ $role->id }}">{{ $role->libelle }}</option>
                                        @empty
                                            <option selected=""> Role</option>
                                        @endforelse
                                    </select>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="submit" class="btn btn-primary">Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
