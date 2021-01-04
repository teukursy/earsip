<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Suratmasuk extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model("Suratmasuk_model");
        $this->load->library('form_validation');
    }

    public function index()
    {
        $data["suratmasuk"] = $this->Suratmasuk_model->getAll();
        $this->load->view("user/suratmasuk/list", $data);
    }

    public function add()
    {
        $suratmasuk = $this->Suratmasuk_model;
        $validation = $this->form_validation;
        $validation->set_rules($suratmasuk->rules());

        if ($validation->run()) {
            $suratmasuk->save();
            $this->session->set_flashdata('success', 'Berhasil disimpan');
        }

        $this->load->view("user/suratmasuk/new_form");
    }

    public function edit($id = null)
    {
        if (!isset($id)) redirect('user/suratmasuk');
       
        $suratmasuk = $this->Suratmasuk_model;
        $validation = $this->form_validation;
        $validation->set_rules($suratmasuk->rules());

        if ($validation->run()) {
            $suratmasuk->update();
            $this->session->set_flashdata('success', 'Berhasil disimpan');
        }

        $data["suratmasuk"] = $suratmasuk->getById($id);
        if (!$data["suratmasuk"]) show_404();
        
        $this->load->view("user/suratmasuk/edit_form", $data);
    }

    public function delete($id=null)
    {
        if (!isset($id)) show_404();
        
        if ($this->Suratmasuk_model->delete($id)) {
            redirect(site_url('user/suratmasuk'));
        }
    }

    public function lihat($id = null)
    {
        if (!isset($id)) redirect('user/suratmasuk');
       
        $suratmasuk = $this->Suratmasuk_model;
        $validation = $this->form_validation;
        $validation->set_rules($suratmasuk->rules());
        
        $data["suratmasuk"] = $this->Suratmasuk_model->getImg($id);

        $this->load->view("user/suratmasuk/lihat_gambar", $data);
    }
    public function report()
    {
        $this->load->model('suratmasuk_model');
        $data['suratmasuk'] = $this->suratmasuk_model->cetak();
        $this->load->library('pdf');
        $this->pdf->setPaper('A4', 'potrait');
        $this->pdf->filename = "laporan-surat_masuk.pdf";
        $this->pdf->load_view('user/suratmasuk/report', $data);
    }

    public function search(){
        $keyword = $this->input->post('keyword');
        $data['suratmasuk'] = $this->Suratmasuk_model->get_keyword($keyword);
        $this->load->view('user/Suratmasuk/list', $data); 
    }
   
}