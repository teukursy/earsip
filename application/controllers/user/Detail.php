<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Detail extends CI_Controller
{
    public function index()
    {
        $data["tbl_pelanggan"] = $this->Cart_model->getAll();
        $this->load->view("user/cart/detail", $data);
    }
}
