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

	public function check_out()
    {
        $data['produk'] = $this->Cart_model->get_produk_all();
        $this->load->view('user/cart/vcheckout', $data);
	}
	
	public function detail_produk()
    {
        $id=($this->uri->segment(3))?$this->uri->segment(3):0;
        $data['produk'] = $this->Cart_model->get_produk_all();
        $data['detail'] = $this->Cart_model->get_produk_id($id)->row_array();
        $this->load->view('user/cart/vdetailproduk', $data);
	}
	
	function tambah()
    {
        $data_produk= array('id' => $this->input->post('id'),
                             'name' => $this->input->post('nama_produk'),
                             'price' => $this->input->post('harga'),
                             'qty' =>$this->input->post('qty')
                            );
        $this->cart->insert($data_produk);
        redirect('user/cart');
	}
	
	function hapus($rowid)
    {
        if ($rowid=="all")
            {
                $this->cart->destroy();
            }
        else
            {
                $data = array('rowid' => $rowid,
                              'qty' =>0);
                $this->cart->update($data);
            }
        redirect('user/cart/vcart');
	}
	
	function ubah_cart()
    {
        $cart_info = $_POST['cart'] ;
        foreach( $cart_info as $id => $cart)
        {
            $rowid = $cart['rowid'];
            $price = $cart['price'];
            $amount = $price * $cart['qty'];
            $qty = $cart['qty'];
            $data = array('rowid' => $rowid,
                            'price' => $price,
                            'amount' => $amount,
                            'qty' => $qty);
            $this->cart->update($data);
        }
        redirect('user/cart/vcart');
	}
	
	public function proses_order()
    {
        //-------------------------Input data pelanggan--------------------------
        $data_pelanggan = array('nama' => $this->input->post('nama_pelanggan'),
                            'email' => $this->input->post('email'),
                            'alamat' => $this->input->post('alamat'),
                            'telp' => $this->input->post('telp'));
        $id_pelanggan = $this->Cart_model->tambah_pelanggan($data_pelanggan);
        //-------------------------Input data order------------------------------
        $data_order = array('tanggal' => date('Y-m-d'),
                            'pelanggan' => $id_pelanggan);
        $id_order = $this->Cart_model->tambah_order($data_order);
        //-------------------------Input data detail order-----------------------
        if ($cart = $this->cart->contents())
            {
                foreach ($cart as $item)
                    {
                        $data_detail = array('id_order' =>$id_order,
                                        'produk' => $item['id'],
                                        'qty' => $item['qty'],
                                        'harga' => $item['price']);
                        $proses = $this->Cart_model->tambah_detail_order($data_detail);
                    }
            }
        //-------------------------Hapus shopping cart--------------------------
        $this->cart->destroy();
        $data['produk'] = $this->keranjang_model->get_produk_all();
        $this->load->view('user/cart/sukses',$data);
    }
}

