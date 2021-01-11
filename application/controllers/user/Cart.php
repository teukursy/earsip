<?php

class Cart extends CI_Controller
{
	public function __construct()
    {
        parent::__construct();
        $this->load->library('cart');
        $this->load->model('Cart_model');
        $this->load->helper('url');
        $this->load->library('session');
	}

    public function form_cart($paket)
	{
        if ($paket == "starter") {
            $data["paket"] = "Starter";
            $data["harga"] = 100000;
        }
        else if ($paket == "medium") {
            $data["paket"] = "Medium";
            $data["harga"] = 135000;
        }
        else if ($paket == "complete") {
            $data["paket"] = "Complete";
            $data["harga"] = 150000;
        }

		$data['produk'] = $this->Cart_model->get_produk_all();
		$this->load->view('user/cart/vcart', $data);
	}   

    public function tambah()
    {
        $data = array(
            'nama_pelanggan' => $this->input->post('nama'),
            'alamat' => $this->input->post('alamat'),
            'email' => $this->input->post('email'),
            'telp' => $this->input->post('telp')
        );
            
        $this->Cart_model->tambah($data);
        $this->session->set_flashdata('notif','<div class="alert alert-success" role="alert"> Data Berhasil ditambahkan <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
        redirect('user/cart/vcart');
    }

    public function print($paket)
    {
        if ($paket == "Starter") {
            $data["paket"] = "Starter";
            $data["harga"] = 100000;
        }
        else if ($paket == "Medium") {
            $data["paket"] = "Medium";
            $data["harga"] = 135000;
        }
        else if ($paket == "Complete") {
            $data["paket"] = "Complete";
            $data["harga"] = 150000;
        }
        $this->load->model('Cart_model');
        $data['produk'] = $this->Cart_model->get_produk_all();
        $this->load->library('pdf');
        $this->pdf->setPaper('A4', 'landscape');
        $this->pdf->filename = "laporan-Cart-Order.pdf";
        $this->pdf->load_view('user/print', $data);
    }
}

