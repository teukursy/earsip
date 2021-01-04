<?php defined('BASEPATH') or exit('No direct script access allowed');

class Suratmasuk_model extends CI_Model
{
    private $_table = "suratmasuk";

    public $nourut;
    public $noberkas;
    public $alamatpengirim;
    public $tanggalmasuk;
    public $perihalmasuk;
    public $berkasmasuk = "default.pdf";

    public function rules()
    {
        return [
            [
                'field' => 'nourut',
                'label' => 'Nourut',
                'rules' => 'required'
            ],


            [
                'field' => 'noberkas',
                'label' => 'Noberkas',
                'rules' => 'required'
            ],

            [
                'field' => 'alamatpengirim',
                'label' => 'Alamatpengirim',
                'rules' => 'required'
            ],

            [
                'field' => 'tanggalmasuk',
                'label' => 'Tanggalmasuk',
                'rules' => 'required'
            ],

            [
                'field' => 'perihalmasuk',
                'label' => 'Perihalmasuk',
                'rules' => 'required'
            ],




        ];
    }

    public function getAll()
    {
        return $this->db->get($this->_table)->result();
    }
    public function getImg($berkasmasuk = 'default.pdf')
    {
        return $this->db->get_where($this->_table, array('berkasmasuk' => $berkasmasuk))->result();
    }
    public function getdesc()
    {

        $this->db->from($this->_table);
        $this->db->order_by("nourut", "desc");
        $query = $this->db->get();
        return $query->result();
    }

    public function getById($id)
    {
        return $this->db->get_where($this->_table, ["nourut" => $id])->row();
    }

    public function save()
    {
        $post = $this->input->post();
        $this->nourut = $post["nourut"];
        $this->noberkas = $post["noberkas"];
        $this->alamatpengirim = $post["alamatpengirim"];
        $this->tanggalmasuk = $post["tanggalmasuk"];
        $this->perihalmasuk = $post["perihalmasuk"];
        $this->berkasmasuk = $this->_uploadImage();
        return $this->db->insert($this->_table, $this);
    }

    public function update()
    {
        $post = $this->input->post();
        $this->nourut = $post["nourut"];
        $this->noberkas = $post["noberkas"];
        $this->alamatpengirim = $post["alamatpengirim"];
        $this->tanggalmasuk = $post["tanggalmasuk"];
        $this->perihalmasuk = $post["perihalmasuk"];
       if (!empty($_FILES["berkasmasuk"]["name"])) {
            $this->berkasmasuk = $this->_uploadImage();
        } else {
          $this->berkasmasuk = $post["old_berkasmasuk"];
        }
        return $this->db->update($this->_table, $this, array('nourut' => $post['nourut']));
    }

    public function delete($id)
    {
        return $this->db->delete($this->_table, array("nourut" => $id));
    }

    private function _uploadImage()
    {
        $config['upload_path']          = './upload/suratmasuk/';
        $config['allowed_types']        = 'pdf';
        $config['file_name']            = $this->nourut;
        $config['overwrite']            = true;
        $config['max_size']             = 0; // 1MB
        // $config['max_width']            = 1024;
        // $config['max_height']           = 768;

        $this->load->library('upload', $config);

        if ($this->upload->do_upload('berkasmasuk')) {
            return $this->upload->data("file_name");
        }

        return "default.pdf";
    }
    function cetak()
    {
        $suratmasuk = $this->db->get('suratmasuk');
        return $suratmasuk->result();
    }

    public function get_keyword($keyword)
    {
        $this->db->select('*');
        $this->db->from('suratmasuk');
        $this->db->like('noberkas', $keyword);
        $this->db->or_like('alamatpengirim', $keyword);
        $this->db->or_like('tanggalmasuk', $keyword);
        $this->db->or_like('perihalmasuk', $keyword);

        return $this->db->get()->result();
    }
    function total_rows($q = null)
    {
        $this->db->from($this->_table);
        return $this->db->count_all_results();
    }
}
