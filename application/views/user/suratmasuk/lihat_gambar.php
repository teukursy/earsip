<!DOCTYPE html>
<html lang="en">

<head>
	<?php $this->load->view("user/_partials/head_demo.php") ?>
</head>

<body id="page-top">

	<?php $this->load->view("user/_partials/navbar_demo.php") ?>
	<div id="wrapper">

		<?php $this->load->view("user/_partials/sidebar.php") ?>

		<div id="content-wrapper">

			<div class="container-fluid">

				<?php $this->load->view("user/_partials/breadcrumb.php") ?>

				<?php if ($this->session->flashdata('success')): ?>
				<div class="alert alert-success" role="alert">
					<?php echo $this->session->flashdata('success'); ?>
				</div>
				<?php endif; ?>

				<!-- Card  -->
				<div class="card mb-3">
					<div class="card-header">

						<a href="<?php echo site_url('user/suratmasuk/') ?>"><i class="fas fa-arrow-left"></i>
							Back</a>
					</div>
					<div class="card-body">

						<form action="" method="post" enctype="multipart/form-data">
						<!-- Note: atribut action dikosongkan, artinya action-nya akan diproses 
							oleh controller tempat vuew ini digunakan. Yakni index.php/admin/products/edit/ID --->
                            <?php foreach ($suratmasuk as $surat_masuk): ?>
                                <embed src="<?php echo base_url ('/upload/suratmasuk/'.$surat_masuk->berkasmasuk) ?>" type="application/pdf" width="800" height="600" />
                                <?php endforeach; ?>
						</form>

					</div>


				</div>
				<!-- /.container-fluid -->

				<!-- Sticky Footer -->
				<?php $this->load->view("user/_partials/footer_demo.php") ?>

			</div>
			<!-- /.content-wrapper -->

		</div>
		<!-- /#wrapper -->

		<?php $this->load->view("user/_partials/scrolltop.php") ?>

		<?php $this->load->view("user/_partials/js.php") ?>

</body>

</html>