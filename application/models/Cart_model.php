<?php

class Cart_model extends CI_Model
{
    
    public function get_produk_all(){
        $query = $this->db->get('tbl_produk', 'tbl_pelanggan');
        return $query->result_array();
    }

    public function tambah($data){
        $this->db->insert('tbl_pelanggan', $data);
        return TRUE;
    }
}
