<!-- Sidebar -->
<ul class="sidebar navbar-nav">
    <li class="nav-item <?php echo $this->uri->segment(2) == '' ? 'active': '' ?>">
        <a class="nav-link" href="<?php echo site_url('admin') ?>">
            <i class="fas fa-fw fa-home"></i>
            <span>Beranda</span>
        </a>
    </li>
    <li class="nav-item dropdown <?php echo $this->uri->segment(2) == 'products' ? 'active': '' ?>">
        <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <i class="fas fa-fw fa-archive"></i>
            <span>Arsip</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown">
            <a class="dropdown-item" href="<?php echo site_url('admin/suratkeputusan') ?>">Surat Keputusan</a>
            <a class="dropdown-item" href="<?php echo site_url('admin/suratkeluar') ?>">Surat Keluar</a>
            <a class="dropdown-item" href="<?php echo site_url('admin/suratmasuk') ?>">Surat Masuk</a>
            <a class="dropdown-item" href="<?php echo site_url('admin/inventaris') ?>">Inventaris Desa</a>
            <a class="dropdown-item" href="<?php echo site_url('admin/perdes') ?>">Peraturan Desa</a>
        </div>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="<?php echo site_url('admin/lap_inventaris') ?>">
            <i class="fa fa-file"></i>
            <span>Laporan Inventaris</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="<?php echo site_url('admin/tentang') ?>">
            <i class="fa fa-info-circle"></i>
            <span>Tentang</span></a>
    </li>
    <li class="nav-item dropdown <?php echo $this->uri->segment(2) == 'products' ? 'active': '' ?>">
        <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <i class="fas fa-fw fa-cog"></i>
            <span>Setting</span>
        </a>
            <div class="dropdown-menu" aria-labelledby="pagesDropdown">
            
            <a class="dropdown-item" href="<?php echo site_url('admin/login/logout') ?>">Logout</a>
        </div>
    </li>
</ul>
