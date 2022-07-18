@extends("layouts.master")
@section('timesheet','active')
@section("content")
       <!-- Body: Body -->
        <div class="body d-flex py-lg-3 py-md-2">
            <div class="container-xxl">
                <div class="row align-items-center">
                    <div class="border-0 mb-4">
                        <div class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                            <h3 class="fw-bold mb-0">Project Timesheet</h3>
                            <div class="col-auto d-flex w-sm-100">
                                <button type="button" class="btn btn-dark btn-set-task w-sm-100" data-bs-toggle="modal" data-bs-target="#sendsheet"><i class="icofont-file-spreadsheet me-2 fs-6"></i>Sheets Sent</button>
                            </div>
                        </div>
                    </div>
                </div> <!-- Row end  -->
                <div class="row clearfix g-3">
                  <div class="col-sm-12">
                        <div class="card mb-3">
                            <div class="card-body">
                                <table id="myProjectTable" class="table table-hover align-middle mb-0" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th>Project Name</th>
                                            <th>Mon</th>
                                            <th>Tue</th>
                                            <th>Wed</th>
                                            <th>Thur</th>
                                            <th>Fri</th>
                                            <th>Sat</th>
                                            <th>Sun</th>
                                            <th>Total</th>
                                            <th><i class="icofont-gear fs-5"></i></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <select class="form-select" aria-label="Default select Project Category">
                                                    <option selected>Rhinestone</option>
                                                    <option value="1">Fast Cad</option>
                                                    <option value="2">Box of Crayons</option>
                                                    <option value="3">Gob Geeklords</option>
                                                    <option value="4">Java Dalia</option>
                                                    <option value="5">Practice to Perfect</option>
                                                    <option value="6">Rhinestone</option>
                                                    <option value="7">Social Geek Made</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded1" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded2" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded3" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded4" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded5" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded6" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded7" value="08:00:00">
                                            </td>
                                            <td>
                                                <button type="button" class="btn light-success-bg">56</button>
                                            </td>
                                            <td>
                                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                    <button type="button" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></button>
                                                    <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <select class="form-select" aria-label="Default select Project Category">
                                                    <option selected>Practice to Perfect</option>
                                                    <option value="1">Fast Cad</option>
                                                    <option value="2">Box of Crayons</option>
                                                    <option value="3">Gob Geeklords</option>
                                                    <option value="4">Java Dalia</option>
                                                    <option value="5">Practice to Perfect</option>
                                                    <option value="6">Rhinestone</option>
                                                    <option value="7">Social Geek Made</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded8" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded9" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded10" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded11" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded12" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded13" value="06:20:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded14" value="08:00:00">
                                            </td>
                                            <td>
                                                <button type="button" class="btn light-success-bg">54.20</button>
                                            </td>
                                            <td>
                                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                    <button type="button" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></button>
                                                    <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <select class="form-select" aria-label="Default select Project Category">
                                                    <option selected>Java Dalia</option>
                                                    <option value="1">Fast Cad</option>
                                                    <option value="2">Box of Crayons</option>
                                                    <option value="3">Gob Geeklords</option>
                                                    <option value="4">Java Dalia</option>
                                                    <option value="5">Practice to Perfect</option>
                                                    <option value="6">Rhinestone</option>
                                                    <option value="7">Social Geek Made</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded15" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded16" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded17" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded18" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded19" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded20" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded21" value="08:00:00">
                                            </td>
                                            <td>
                                                <button type="button" class="btn light-success-bg">56</button>
                                            </td>
                                            <td>
                                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                    <button type="button" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></button>
                                                    <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <select class="form-select" aria-label="Default select Project Category">
                                                    <option selected>Gob Geeklords</option>
                                                    <option value="1">Fast Cad</option>
                                                    <option value="2">Box of Crayons</option>
                                                    <option value="3">Gob Geeklords</option>
                                                    <option value="4">Java Dalia</option>
                                                    <option value="5">Practice to Perfect</option>
                                                    <option value="6">Rhinestone</option>
                                                    <option value="7">Social Geek Made</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded22" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded23" value="04:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded24" value="04:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded25" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded26" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded27" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded28" value="08:00:00">
                                            </td>
                                            <td>
                                                <button type="button" class="btn light-success-bg">48</button>
                                            </td>
                                            <td>
                                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                    <button type="button" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></button>
                                                    <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <select class="form-select" aria-label="Default select Project Category">
                                                    <option selected>Box of Crayons</option>
                                                    <option value="1">Fast Cad</option>
                                                    <option value="2">Box of Crayons</option>
                                                    <option value="3">Gob Geeklords</option>
                                                    <option value="4">Java Dalia</option>
                                                    <option value="5">Practice to Perfect</option>
                                                    <option value="6">Rhinestone</option>
                                                    <option value="7">Social Geek Made</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded29" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded30" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded31" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded32" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded33" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded34" value="05:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded35" value="05:00:00">
                                            </td>
                                            <td>
                                                <button type="button" class="btn light-success-bg">50</button>
                                            </td>
                                            <td>
                                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                    <button type="button" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></button>
                                                    <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <select class="form-select" aria-label="Default select Project Category">
                                                    <option selected>Fast Cad</option>
                                                    <option value="1">Fast Cad</option>
                                                    <option value="2">Box of Crayons</option>
                                                    <option value="3">Gob Geeklords</option>
                                                    <option value="4">Java Dalia</option>
                                                    <option value="5">Practice to Perfect</option>
                                                    <option value="6">Rhinestone</option>
                                                    <option value="7">Social Geek Made</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded36" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded37" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded38" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded39" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded40" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded41" value="08:00:00">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded42" value="08:00:00">
                                            </td>
                                            <td>
                                                <button type="button" class="btn light-success-bg">56</button>
                                            </td>
                                            <td>
                                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                    <button type="button" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></button>
                                                    <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <select class="form-select" aria-label="Default select Project Category">
                                                    <option selected>Project Name Select</option>
                                                    <option value="1">Fast Cad</option>
                                                    <option value="2">Box of Crayons</option>
                                                    <option value="3">Gob Geeklords</option>
                                                    <option value="4">Java Dalia</option>
                                                    <option value="5">Practice to Perfect</option>
                                                    <option value="6">Rhinestone</option>
                                                    <option value="7">Social Geek Made</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded43">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded44">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded45">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded46">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded47">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded48">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded49">
                                            </td>
                                            <td>
                                                <button type="button" class="btn light-success-bg">00</button>
                                            </td>
                                            <td>
                                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                    <button type="button" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></button>
                                                    <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <select class="form-select" aria-label="Default select Project Category">
                                                    <option selected>Project Name Select</option>
                                                    <option value="1">Fast Cad</option>
                                                    <option value="2">Box of Crayons</option>
                                                    <option value="3">Gob Geeklords</option>
                                                    <option value="4">Java Dalia</option>
                                                    <option value="5">Practice to Perfect</option>
                                                    <option value="6">Rhinestone</option>
                                                    <option value="7">Social Geek Made</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded50">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded51">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded52">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded53">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded54">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded55">
                                            </td>
                                            <td>
                                                <input type="time" class="form-control" id="timepickerded56">
                                            </td>
                                            <td>
                                                <button type="button" class="btn light-success-bg">00</button>
                                            </td>
                                            <td>
                                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                    <button type="button" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></button>
                                                    <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                  </div>
                </div><!-- Row End -->
            </div>
        </div>


                <!-- Send sheet-->
                <div class="modal fade" id="sendsheet" tabindex="-1"  aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title  fw-bold" id="sendsheetLabel"> Sheets Sent</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Done</button>
                            <button type="submit" class="btn btn-primary">sent</button>
                        </div>
                    </div>
                    </div>
                </div>
                @endsection
