<?php

class Cart_model extends CI_Model
{
    public function get_produk_all(){
        $query = $this->db->get('tbl_produk');
        return $query->result_array();
    }

    public function get_produk_id($id){
        $this->db->select('tbl_produk');
        $this->db->from('tbl_produk');
        $this->db_>where('id_produk', $id);
        return $this->db->get();
    }

    public function tambah_pelanggan($data){
        $this->db->insert('tbl_pelanggan', $data);
        $id = $this->db->insert_id();
        return (isset($id)) ? $id : FALSE;
    }

    public function tambah_order($data){
        $this->db->insert('tbl_order', $data);
        $id = $this->db->insert_id();
        return (isset($id)) ? $id : FALSE;
    }

    public function tambah_detail_order($data){
        $this->db->insert('tbl_detail_order', $data);
    }
}
