<?php

class Cart_model extends CI_Model
{
    private $_table = "tbl_pelanggan";
    
    public function get_produk_all(){
        $query = $this->db->get('tbl_produk', 'tbl_pelanggan');
        return $query->result_array();
    }

    public function tambah($data){
        $this->db->insert('tbl_pelanggan', $data);
        return TRUE;
    }
    function total_rows($q = null){
        $this->db->from($this->_table);
        return $this->db->count_all_results();
    }
    function cetak(){
        $post = $this->input->post();
        $this->nama_pelanggan = $post["nama_pelanggan"];
        $this->email = $post["email"];
        $this->alamat = $post["alamat"];
        $this->telp = $post["telp"];
        $this->paket = $post["paket_order"];
        $this->harga = $post["harga"];
        
        return $this->db->update($this->_table, $this, array('id_pelanggan' => $post['id_pelanggan']));
    }
}
